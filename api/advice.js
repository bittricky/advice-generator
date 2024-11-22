export async function onRequest() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return new Response(data.slip.advice, {
    headers: { "Content-Type": "text/plain" },
  });
}
