import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';
import Hero from '~/components/Hero';

import stylesUrl from '~/styles/routes/index.css';
import { getPostsFromRoute } from "~/helpers/mdloader";


type IndexData = {
  archives: Array<{ name: string; url: string }>;
  otherAchives: Array<{ name: string; to: string }>;
  articles: any[];
  web3Notes: any[];
};


export let loader: LoaderFunction = async () => {
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
        name: 'Web3 Diaries',
        url: 'web3',
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
        name: 'Pod Wey Don Cast',
        to: 'demos/params',
      },
    ],
    articles: await getPostsFromRoute('articles'),
    web3Notes: await getPostsFromRoute('web3','seriesIndex')
  };


  return json(data);
};


export let meta: MetaFunction = () => {
  return {
    title: 'Philip Obosi',
    description: 'The home on my mental emesis.',
  };
};

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};


export default function Index() {
  let { articles,web3Notes } = useLoaderData<IndexData>();

  return (
    <div>
      <Hero>
        <div className='index_hero'>
          <p className='index_hero_desc'>
            I am a creator, archiving the most useful parts of my life on the internet in hopes of dying empty.
          </p>
          {/*<p>Building for creators at <a href="https://creathor.app" target="_blank">Creathor</a>.</p>*/}
        </div>
      </Hero>
      {/*<div className='index_main'>*/}
      {/*  <div className='index_main_links'>*/}
      {/*    {*/}
      {/*      archives.map(({ name, url }) => {*/}
      {/*        return <Link to={url} key={name}>{name}</Link>*/}
      {/*      })*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*  <div className='index_main_others'>*/}
      {/*    <h6>OTHER ARCHIVES</h6>*/}
      {/*    {*/}
      {/*      otherAchives.map(({ name, to }) => {*/}
      {/*        return <a href={to} target="_blank" key={name}>{name} &nbsp;↗</a>*/}
      {/*      })*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Hero>
        <div className='index_articles_main'>
          <header>
            <h4>WEB3 NOTES</h4>
            <p>Byte-sized notes from my learnings about web 3.0 and the blockchain. I hope you find them easy to follow.</p>
          </header>
          <div className='index_articles_main_numberedList'>
            {web3Notes?.map((article: any) => (
                <Link className='index_articles_main_numberedList_item' key={article.slug} to={article.slug}>{article.title}</Link>
            ))}
          </div>
        </div>
      </Hero>
      <Hero>
        <div className='index_articles_main'>
          <header>
            <h4>OTHER READS</h4>
          </header>
          <div className='index_articles_main_list'>
            {articles?.map((article: any) => (
                <Link className='index_articles_main_list_item' key={article.slug} to={article.slug}>{article.title}</Link>
            ))}
          </div>
        </div>
      </Hero>
    </div>
  );
}
