export async function getGitHubRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 },
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub repos: ${res.statusText}`);
    }
  
    return res.json();
  }
  