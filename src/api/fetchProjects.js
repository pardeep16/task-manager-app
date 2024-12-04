

export const fetchProjects = async ()=>{
    const url ='https://dummyjson.com/c/4437-bfc7-44c0-ab8a';

    const response = await fetch(url);
    const data = await response?.json();
    return data;
} 