import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';
import Hero from '~/components/Hero';

import stylesUrl from '~/styles/routes/index.css';


type ArticlesData = {
  archives: Array<{ name: string; url: string }>;
  otherAchives: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: ArticlesData = {
    archives: [
      {
        name: 'About',
        url: 'about',
      },
      {
        name: 'Articles',
        url: 'articles',
      },
      {
        name: 'Work',
        url: 'work',
      },
      {
        name: 'Newsletter',
        url: 'newsletter',
      },
    ],
    otherAchives: [
      {
        name: 'The Diary of a Creator',
        to: 'https://diaryofcreator.com',
      },
      {
        name: 'The Breakdown Show',
        to: 'demos/about',
      },
      {
        name: 'Pod Wey Don Cast',
        to: 'demos/params',
      },
    ],
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
  let { archives, otherAchives } = useLoaderData<ArticlesData>();

  return (
    <div>
      <Hero>
        <div className='index_hero'>
          <p className='index_hero_desc'>
            “I like to get things out of my head in a structured manner. Could be anything really. More recently it's ideas, opinions and learnings from work, building product, startups, the creator economy and web 3.0”
          </p>
        </div>
      </Hero>
      <div className='index_main'>
        <div className='index_main_links'>
          {
            archives.map(({ name, url }) => {
              return <Link to={url} key={name}>{name}</Link>
            })
          }
        </div>
        <div className='index_main_others'>
          <h6>OTHER ARCHIVES</h6>
          {
            otherAchives.map(({ name, to }) => {
              return <a href={to} target="_blank" key={name}>{name}</a>
            })
          }
        </div>
      </div>
    </div>
  );
}
