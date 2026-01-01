import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Repo.css";
import languages from "../assets/languages.json";
import { FaStar, FaCodeBranch, FaExclamationCircle } from "react-icons/fa";

export default function Repo() {
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!language) return;

    const fetchRepos = async () => {
      setLoading(true);
      setError("");
      setCurrentRepo(null);

      try {
        const res = await axios.get(
          "https://api.github.com/search/repositories",
          {
            params: {
              q: `language:${language}`,
              sort: "stars",
              order: "desc",
              per_page: 30,
            },
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        setRepos(res.data.items);
        pickRandomRepo(res.data.items);
      } catch (err) {
        setError("Failed to fetch repositories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [language]);

  const pickRandomRepo = (repoList = repos) => {
    if (!repoList.length) return;
    const randomIndex = Math.floor(Math.random() * repoList.length);
    setCurrentRepo(repoList[randomIndex]);
  };

  return (
    <div className="page-center">
      <div className="outer-frame">

        <div className="repo-card">
          <div className="repo-header">
            <div className="repo-icon"></div>
            <h2>GitHub Repository Finder</h2>
          </div>

          <select
            className="repo-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select a Language</option>
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.title}
              </option>
            ))}
          </select>

          {/* States */}
          {!language && (
            <div className="repo-empty">Please select a language</div>
          )}

          {loading && (
            <div className="repo-empty">Loading repository...</div>
          )}

          {error && <div className="repo-empty">{error}</div>}

          {/* Single Repo Card */}
          {currentRepo && !loading && (
            <div className="single-repo">
              <h3>{currentRepo.name}</h3>
              <p className="repo-desc">
                {currentRepo.description || "No description available"}
              </p>

              <div className="repo-meta">
                <span>🟡 {currentRepo.language}</span>
                <span>
                  <FaStar /> {currentRepo.stargazers_count.toLocaleString()}
                </span>
                <span>
                  <FaCodeBranch /> {currentRepo.forks_count.toLocaleString()}
                </span>
                <span>
                  <FaExclamationCircle />{" "}
                  {currentRepo.open_issues_count}
                </span>
              </div>
            </div>
          )}

          {currentRepo && (
            <button className="refresh-btn" onClick={() => pickRandomRepo()}>
              Refresh
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
