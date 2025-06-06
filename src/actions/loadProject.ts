
export async function loadProject(username: string, repo: string) {
  const Response = await fetch(`https://api.github.com/repos/${username}/${repo}`);

  if(!res.ok) {
    
  }
  return res.json();
}