import React from 'react';
import Input from "./ui/input/Input";
import Select from "./Select";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <Input value={filter.search}
                   onChange={e => setFilter({...filter, search: e.target.value})}
                   placeholder="Search"/>
            <Select
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort: sort})}
                defaultValue="Sort By"
                options={[{value: 'title', name: 'Title'}, {value: 'body', name: 'Body'}]}/>
        </div>
    );
};

export default PostFilter;
