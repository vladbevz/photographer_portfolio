import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Lightbox from "../components/Portfolio/Lightbox";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, urlFor } from "../lib/sanity";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation("portfolio");
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
          <p>{t("project.loading")}</p>
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
          <h2>{t("project.notFound")}</h2>
          <Link to="/portfolio" className={styles.backLink}>
            <ArrowLeft size={16} /> {t("project.back")}
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

  const coverImageUrl = project.coverImage
    ? urlFor(project.coverImage).width(1200).height(630).url()
    : undefined;

  const categoryLabels = {
    portraits: t("filters.portraits"),
    couple: t("filters.couple"),
    grossesse: t("filters.grossesse"),
    mariage: t("filters.mariage"),
    commercial: t("filters.commercial"),
  };

  return (
    <>
      <SEO
        title={project.title}
        description={project.description || `${project.title} — fine art photography by Anastasia Syrmais.`}
        path={`/portfolio/${slug}`}
        image={coverImageUrl}
        type="article"
      />
      <Header variant="light" />
      <div className={styles.projectPage}>
        <div className={styles.navigation}>
          <Link to="/portfolio" className={styles.backButton}>
            <ArrowLeft size={20} /> {t("project.back")}
          </Link>
        </div>

        <header className={styles.projectHeader}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <div className={styles.projectMeta}>
            {project.category && (
              <span className={styles.category}>
                {categoryLabels[project.category] || project.category}
              </span>
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
              <span className={styles.client}>
                {t("project.client")}: {project.client}
              </span>
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
              onClick={() => setLightboxIndex(index)}
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

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
};

export default ProjectPage;
