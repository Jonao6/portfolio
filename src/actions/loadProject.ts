
export default async function loadProject(username: string, repo: string) {
  const Response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    
  }
}