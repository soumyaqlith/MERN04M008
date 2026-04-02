
function Home(props) {
    return (
        <>
            <h1>Home page</h1>
            {/* {children} */}

            value : {props.value}
            <br />
            String value : {props.str}
            <br />
            Array value : {props.arr}

            <ul>
                {
                    props.arr.map((v,i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>


            {props.arr.join(",")}
        </>
    )
}

export default Home;