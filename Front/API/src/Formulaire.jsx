
import React, { useState } from 'react';
import CardInfor from './CardInfo';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        id: '',
        theme: '',
        question: '',
        reponse: ''
    });
    const [listData, setListData] = useState([])
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData));
        fetch('http://localhost:5000/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

    };
    const printQuestion = () => {
        fetch("http://localhost:5000/question", {
            method: "GET"
        }).then(response => response.json()).then(data => {

            console.log(data)
            setListData(data)
            setLoading(true)

        })
    }


    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                <label htmlFor="id">ID :</label>
                <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />

                <label htmlFor="theme">Thème :</label>
                <input type="text" id="theme" name="theme" value={formData.theme} onChange={handleChange} />

                <label htmlFor="question">Question :</label>
                <input type="text" id="question" name="question" value={formData.question} onChange={handleChange} />

                <label htmlFor="reponse">Réponse :</label>
                <input type="text" id="reponse" name="reponse" value={formData.reponse} onChange={handleChange} />

                <button type="submit">Envoyer</button>

            </form>
            <button onClick={printQuestion}>Consoler le contenu de question</button>
            <div className='container'>
                {loading ? listData.map(data =>
                (
                    <CardInfor data={data}></CardInfor>
                )) : " rien a afficher"}

            </div>

        </>
    );
};

export default Formulaire;