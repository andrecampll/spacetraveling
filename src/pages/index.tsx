import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="aa">
            <a>
              <strong>Como Utilizar Hooks</strong>
              <p>Pensando em sincronizção em vez de ciclos de vida</p>
              <footer>
                <div>
                  <FaCalendar size={20} />
                  <time>10 Mar 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>10 Mar 2021</span>
                </div>
              </footer>
            </a>
          </Link>
          <Link href="aa">
            <a>
              <strong>Como Utilizar Hooks</strong>
              <p>Pensando em sincronizção em vez de ciclos de vida</p>
              <footer>
                <div>
                  <FaCalendar size={20} />
                  <time>10 Mar 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>10 Mar 2021</span>
                </div>
              </footer>
            </a>
          </Link>
          <Link href="aa">
            <a>
              <strong>Como Utilizar Hooks</strong>
              <p>Pensando em sincronizção em vez de ciclos de vida</p>
              <footer>
                <div>
                  <FaCalendar size={20} />
                  <time>10 Mar 2021</time>
                </div>
                <div>
                  <FiUser size={20} />
                  <span>10 Mar 2021</span>
                </div>
              </footer>
            </a>
          </Link>

          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
