import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';
import Hero from '~/components/Hero';

import stylesUrl from '~/styles/routes/index.css';


type IndexData = {
  archives: Array<{ name: string; url: string }>;
  otherAchives: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
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
export default function Index() {
  let { archives, otherAchives } = useLoaderData<IndexData>();

  return (
    <div>
      <Hero>
        <div className='index_hero'>
          <p className='index_hero_desc'>
            I am a creator, archiving the most useful parts of my life on the internet in hopes of dying empty.
          </p>
        </div>
      </Hero>
      <div className='index_main'>
        <div className='index_main_links'>
          {
            archives.map(({ name, url }) => {
              return <Link to={url}>{name}</Link>
            })
          }
        </div>
        <div className='index_main_others'>
          <h6>OTHER ARCHIVES</h6>
          {
            otherAchives.map(({ name, to }) => {
              return <a href={to} target="_blank">{name}</a>
            })
          }
        </div>
      </div>
    </div>
  );
}
