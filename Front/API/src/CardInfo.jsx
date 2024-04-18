import "/card.css"

export default function CardInfor({ data }) {


    const showInfo = () => {

        fetch("http://localhost:5000/question/"+data.id, {
            method: "GET"
        }).then(response => response.json()).then(data => {

            console.log(data)
            setListData(data)
            setLoading(true)

        })

    }


    console.log(data)
    return (

        <>
            {/* <div className="card" onClick={ }>
                <p>{data.id}</p>
                <h3>{data.theme}</h3>
                <h3>{data.question}</h3>
                <h3>{data.response}</h3>
            </div> */}
        </>
    )
}