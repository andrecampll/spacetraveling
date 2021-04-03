import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): JSX.Element {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <div className={styles.bannerImage} />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Como utilizar hooks</h1>
          <footer>
            <div>
              <FiCalendar size={20} />
              <time>10 Mar 2021</time>
            </div>
            <div>
              <FiUser size={20} />
              <span>André</span>
            </div>
            <div>
              <FiClock size={20} />
              <span>4 min</span>
            </div>
          </footer>

          <div className={styles.postContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis quo deserunt est, ad molestias eaque ducimus quaerat,
              deleniti similique earum optio laboriosam nihil perspiciatis,
              error aspernatur sequi consectetur doloremque repellat.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
