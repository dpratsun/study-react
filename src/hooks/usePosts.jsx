import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            // sort mutates current array. state can not be mutated directly
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    return  useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase())
            || p.body.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
}