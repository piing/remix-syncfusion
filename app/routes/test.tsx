import type { LoaderFunction } from '@remix-run/cloudflare'
import { useLoaderData, Await } from '@remix-run/react'
import { defer } from '@remix-run/cloudflare';
import { Suspense } from 'react';

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`响应数据`)
    }, 3000)
  })
}

export const loader: LoaderFunction = async ({ request, context }) => {
  const res = delay()
  return defer({
    res
  });
}

export default function Button() {
  const { res } = useLoaderData();
  return (
    <>
      <p>标题</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Await<string> resolve={res}>
          {(res) => {
            return (
            <p>OK</p>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
