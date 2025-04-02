import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const blogs = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogs.map((blog) => (
        <BlogSummaryCard
          slug={blog.slug}
          key={blog.slug}
          title={blog.title}
          abstract={blog.abstract}
          publishedOn={new Date(blog.publishedOn).toLocaleDateString()}
        />
      ))}

      {/* TODO: Iterate over the data read from the file system! */}
      {/*<BlogSummaryCard*/}
      {/*  slug="example"*/}
      {/*  title="Hello world!"*/}
      {/*  abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"*/}
      {/*  publishedOn={new Date()}*/}
      {/*/>*/}
    </div>
  );
}

export default Home;
