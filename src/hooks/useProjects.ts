import { useEffect, useState } from "react";
import {
  getProjectsWithImage,
  ProjectWithImage,
} from "../services/projects-service";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectWithImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      setError("");
      try {
        const projects = await getProjectsWithImage();
        const sortedProjects = projects.sort((a, b) => a.position - b.position);
        setProjects(sortedProjects);
      } catch (err) {
        setError("An error occurred while fetching projects");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}
