import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';
import Hero from '~/components/Hero';
import { getPosts } from '~/helpers/mdloader';


import stylesUrl from '~/styles/routes/articles.css';


type ArticlesData = {
  // archives: Array<{ name: string; url: string }>;
  articles: any[]
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  let data: ArticlesData = {
    articles: await getPosts()
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

// https://remix.run/guides/routing#index-routes
export default function Articles() {
  let { articles } = useLoaderData<ArticlesData>();

  return (
    <div>
      <Hero>
        <div className='articles_hero'>
          <p className='articles_hero_desc'>
            “I like to get things out of my head in a structured manner. Could be anything really. More recently it's ideas, opinions and learnings from work, building product, startups, the creator economy and web 3.0”
          </p>
        </div>
      </Hero>
      <div className='articles_main'>
        <header>
          <h5>LATEST READS</h5>
        </header>
        <div className='articles_main_list'>
          {articles?.map((article: any) => (
            <Link className='articles_main_list_item' key={article.slug} to={`/articles/${article.slug}`}>{article.title}<span>JAN 2022</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
}
