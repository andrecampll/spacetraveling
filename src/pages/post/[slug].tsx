/* eslint-disable react/no-danger */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-dom';
import { FiUser, FiCalendar, FiClock } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      };
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <div className={styles.bannerImage} />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.data.title}</h1>
          <footer>
            <div>
              <FiCalendar size={20} />
              <time>{post.first_publication_date}</time>
            </div>
            <div>
              <FiUser size={20} />
              <span>{post.data.author}</span>
            </div>
            <div>
              <FiClock size={20} />
              <span>4 min</span>
            </div>
          </footer>

          <div className={styles.postContent}>
            {post.data.content.map(content => (
              <>
                <h2>{content.heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.body.text,
                  }}
                />
              </>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    data: {
      author: response.data.author,
      title: response.data.title,
      content: response.data.content.map(content => ({
        heading: content.heading,
        body: {
          text: RichText.asHtml(content.body),
        },
      })),
      banner: {
        url: response.data.banner.url,
      },
    },
    first_publication_date: new Date(
      response.last_publication_date
    ).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 30,
  };
};
