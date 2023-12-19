import '../style/ocr.css'
import React, {useState} from 'react';
import { getDatabase, ref, child, get, set } from "firebase/database";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function OCR({ActivePage, onActivePage, database}){

    const handleGoBack = () => {
        onActivePage('Home');
    }
    
    const readDBText = () => {
        const dbRef = ref(database);
        get(child(dbRef, `Testo Rilevato/Testo`)).then((snapshot) => {
            window.speechSynthesis.speak(snapshot.val());
        }).catch((error) => { console.error(error); });
    }

    return(
        <>
            <div className="OcrBody">
                <div className="OcrInformation">
                    <h1 className="OcrH1">OCR</h1>
                </div>
                <button className="OcrContainer">
                    <h1 className="OcrButton" onClick={() => { readDBText(); }}>AVVIA OCR</h1>
                </button>
                <div className="OcrButtonContainer">
                    <button className="OcrGoBackContainer">
                        <h1 className="OcrGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OCR;