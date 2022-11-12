import * as React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import { Container } from '@mui/system'
import { useState } from 'react'

export default function UploadButton() {

  const [profileData, setProfileData] = useState(null)

    function getData() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/profile',
        })
            .then((response) => {
                const res = response.data
                setProfileData({
                    profile_name: res.name,
                    about_me: res.about,
                })
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })

    const [file, setFile] = React.useState('')

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files
        if (files != null && files.length > 0) {
            setFile(files[0])
            getData()
            // var fileURL = new URL(files[0])
            console.log(toBase64(files[0]))
        }
    }

    React.useEffect(() => {
        return () => {
            URL.revokeObjectURL(file)
        }
    }, [file])

    return (
        <Container maxWidth="sm">
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                    variant="contained"
                    component="label"
                    onClick={onChange}
                    endIcon={<FileUploadIcon />}
                >
                    Upload
                    <input hidden accept="pdf/*" multiple type="file" />
                </Button>
            </Stack>
        </Container>
    )
}
