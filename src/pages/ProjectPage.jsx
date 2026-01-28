// src/pages/ProjectPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, urlFor } from "../lib/sanity";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const data = await getProjectBySlug(slug);
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header variant="light" />
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading project...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Header variant="light" />
        <div className={styles.notFound}>
          <h2>Project not found</h2>
          <Link to="/portfolio" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const allImages = [
    project.coverImage,
    ...(project.gallery || [])
  ].filter(Boolean);

  return (
    <>
      <Header variant="light" />
      <div className={styles.projectPage}>
        <div className={styles.navigation}>
          <Link to="/portfolio" className={styles.backButton}>
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <header className={styles.projectHeader}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <div className={styles.projectMeta}>
            {project.category && (
              <span className={styles.category}>{project.category}</span>
            )}
            {project.date && (
              <span className={styles.date}>
                {new Date(project.date).toLocaleDateString()}
              </span>
            )}
            {project.location && (
              <span className={styles.location}>{project.location}</span>
            )}
            {project.client && (
              <span className={styles.client}>Client: {project.client}</span>
            )}
          </div>
        </header>

        {project.description && (
          <div className={styles.description}>
            <p>{project.description}</p>
          </div>
        )}

        <div className={styles.gallery}>
          {allImages.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
            >
              <img
                src={urlFor(image).width(800).url()}
                alt={image.alt || project.title}
                className={styles.galleryImage}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;