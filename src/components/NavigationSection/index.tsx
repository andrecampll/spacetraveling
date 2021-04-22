import Link from 'next/link';
import styles from './navigation.module.scss';

type NavigationSectionProps = {
  previousPost?: {
    uid: string;
    data: {
      title: string;
    };
  };
  nextPost?: {
    uid: string;
    data: {
      title: string;
    };
  };
};

export default function NavigationSection({
  previousPost,
  nextPost,
}: NavigationSectionProps): JSX.Element {
  return (
    <section className={styles.navigation}>
      <div>
        {previousPost && (
          <>
            <h5>{previousPost.data.title}</h5>
            {/* <button type="button">Post anterior</button> */}
            <Link href={`/post/${previousPost.uid}`} key={previousPost.uid}>
              <a>
                <span>Post anterior</span>
              </a>
            </Link>
          </>
        )}
      </div>

      <div>
        {nextPost && (
          <>
            <h5>{nextPost.data.title}</h5>
            <Link href={`/post/${nextPost.uid}`} key={nextPost.uid}>
              <a>
                <span>Próximo post</span>
              </a>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
