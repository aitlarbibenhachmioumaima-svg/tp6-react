import useFetch from "./useFetch";

function ListeArticles() {
  const { resultat, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Une erreur est survenue</p>;

  return (
    <div>
      <ul>
        {Array.isArray(resultat) &&
          resultat.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default ListeArticles;