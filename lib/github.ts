interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    fork: boolean;
    private: boolean;
    archived: boolean;
    has_pages: boolean;
}

export async function getGitHubRepos(username: string): Promise<(GitHubRepo & { logo: string })[]> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();

        // Basic validation to ensure the API returned an array
        if (!Array.isArray(data)) {
            console.error('GitHub API did not return an array. Response:', data);
            return [];
        }

        if (data.length === 0) {
            return []; // Return early if the user has no repos
        }

        // Process each repository to add the logo URL
        const reposWithLogo = await Promise.all(
            data.map(async (repo: GitHubRepo) => {
                // Attempt to fetch a logo.png from the repo's main branch.
                // Fall back to a default image if not found or if an error occurs.
                let logo = '/404NotFound.png'; // Make sure this file exists in /public

                try {
                    const logoRes = await fetch(
                        `https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`
                    );
                    if (logoRes.ok) {
                        // Use the direct URL if the logo is found
                        logo = `https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`;
                    }
                } catch (err) {
                    console.warn(`Could not check for logo in ${repo.name}:`, err);
                }

                // Return the original repo data spread with the determined logo URL
                return {
                    ...repo,
                    logo,
                };
            })
        );

        return reposWithLogo;
    } catch (error) {
        // Log any errors during the main fetch operation
        console.error('Failed to fetch GitHub repos:', error);
        return [];
    }
}
