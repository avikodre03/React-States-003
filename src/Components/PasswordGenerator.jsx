import React from 'react'
import { MdFileCopy } from 'react-icons/md'
import './PasswordGenerator.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './CheckBox'
const PasswordGenerator = (props) => {

    const handleGeneratePassword = (e) => {
        let charlist = ""
        if (props.Uppercase) {
            charlist = charlist + upperCaseLetters
        }
        if (props.Lowercase) {
            charlist = charlist + lowerCaseLetters
        }
        if (props.Number) {
            charlist = charlist + numbers
        }
        if (props.Symbols) {
            charlist = charlist + specialCharacters
        }
        props.setpassword(createpass(charlist))

    }
    const createpass = (charlist) => {
        let pass = ''
        for (let i = 0; i < props.passwordLength; i++) {
            const randomvalue = Math.round(Math.random() * charlist.length)
            pass = pass + charlist.charAt(randomvalue)

        }
        return pass

    }

    return (
        <div className='PasswordGenerator'>
            <div className="heading">
                <h1>Password Generator</h1>
            </div>
            <div className="PasswordGeneratorDIv">
                <input type="text" value={props.password} />
                <button
                    onClick={() => {
                        if (props.password.length > 0) {
                            console.log(props.password);
                            navigator.clipboard.writeText(props.password)
                            props.setcopied(true)
                            setInterval(() => {
                                props.setcopied(false)
                            }, 3000)
                        }
                    }}
                    style={props.copied ? { fontSize: "16px" } : { fontSize: "25px" }}>{props.copied ? "Copied !!" : <MdFileCopy />}</button>
            </div>

            <div className="lengthContainer">
                <label htmlFor="password-strenghth">Select password length</label>
                <input type="number" name="password-strenghth" id="password-strenghth"
                    defaultValue={props.passwordLength} max="15" min="8"
                    onChange={(e) => {
                        props.setpasswordLength(e.target.value)
                    }}
                />
            </div>

            <div className="formGroup">
                <input type="checkbox" name="uppercase-letter" id="uppercase-letter"
                    checked={props.Uppercase}
                    onChange={(e) => {
                        props.setUppercase(e.target.checked)
                    }}
                />
                <label htmlFor="uppercase-letter">Include Uppercase letters</label>
            </div>
            <div className="formGroup">

                <input type="checkbox" name="lowercase-letter" id="lowercase-letter"
                    checked={props.Lowercase}
                    onChange={(e) => {
                        props.setLowercase(e.target.checked)
                    }}
                />
                <label htmlFor="lowercase-letter">Include Lowercase letters</label>
            </div>
            <div className="formGroup">

                <input type="checkbox" name="include-numbers" id="include-numbers"
                    checked={props.Number}
                    onChange={(e) => {
                        props.setNumber(e.target.checked)
                    }}
                />
                <label htmlFor="numbers">Include numbers</label>
            </div>
            <div className="formGroup">

                <input type="checkbox" name="include-symbols" id="include-symbols"
                    checked={props.Symbols}
                    onChange={(e) => {
                        props.setSymbols(e.target.checked)
                    }}
                />
                <label htmlFor="symbols">Include symbols</label>
            </div>
            <div className="generatorButton">
                <button onClick={handleGeneratePassword}>Generate Password</button>
            </div>


        </div>
    )
}

export default PasswordGenerator