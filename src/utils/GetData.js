async function getData(url) {
    const result = await fetch(url);
    return await result.json();
}

export default  getData;