const ArticleList = (props) => {
  return (
    <div className="mt-2">
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2 className="text-primary"> {article.title} </h2>
              <p> {article.body} </p>
              <p> {article.date} </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default ArticleList;
