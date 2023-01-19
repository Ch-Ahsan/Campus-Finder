import React, { useState, useEffect } from 'react';
import CateirngNavbar from './CateringNavbar';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Footer from './GlobalComponent/Footer';
import Alert from '@mui/material/Alert';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
const CreateMenus = () => {
  const [userData, SetuserData] = useState('');

  const [value, SetValue] = useState('');
  // const{MenuName,SetMenuName}=useState('');
  // const{Description,SetDescription}=useState('');
  // const{Price,SetPrice}=useState('');
  // const{Picture,SetPicture}=useState('');

  const [inputFields, setInputField] = useState([
    { MenuName: '', Description: '', Price: '' },
  ]);
  const [FileName, SetFileName] = useState('');
  const [FileName1, SetFile] = useState('');
  const HandleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };
  const onChangeFile = (e) => {
    SetFileName(e.target.files[0]);
    SetFile(URL.createObjectURL(event.target.files[0]));
  };

  const CallHomePage = async (e) => {
    try {
      const res = await fetch('/CreateMenus', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      SetuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CallHomePage();
  }, []);

  const PostData = async (e) => {
    e.preventDefault();

    const [{ Description, Price }] = inputFields;
    if (!Description || !Price || !FileName) {
      SetValue('updated1');
    } else {
      const formData = new FormData();
      // formData.append("MenuName", MenuName);
      formData.append('Description', Description);
      formData.append('Price', Price);
      formData.append('Picture', FileName);
     console.log(formData)
      const res = await fetch('/CreateMenus', {
        method: 'POST',

        body: formData,
      });
      const data = await res.json();

      if (res.status === 400 || !data) {
        SetValue('not');
      } else {
        SetValue('updated');
      }
    }
  };

  return (
    <div>
      <div>
        <CateirngNavbar name={userData.name} />
      </div>
      <div>
        {value === 'not' && (
          <div>
            {' '}
            <Alert severity='error'>invalid data</Alert>
          </div>
        )}
        {value === 'updated' && (
          <div>
            {' '}
            <Alert severity='success'>Saved sucessfully</Alert>
          </div>
        )}
        {value === 'updated1' && (
          <div>
            {' '}
            <Alert severity='error'>Feild Cant Be Empty</Alert>
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1 style={{ padding: '2vmax' }}>Create Menus</h1>
        </div>
        <div>
          <form method='POST' encType='multipart/form-data'>
            {inputFields.map((inputFields, index) => (
              <div key={index}>
                <input
                  style={{
                    width: '42vmax',
                    marginBottom: '2px',
                    height: '40px',
                  }}
                  type='text'
                  placeholder='Enter Description'
                  name='Description'
                  onChange={(event) => HandleChange(index, event)}
                  value={inputFields.Description}
                />{' '}
                <br /> <br />
                <input
                  style={{
                    width: '42vmax',
                    marginBottom: '1vmax',
                    height: '40px',
                  }}
                  type='Number'
                  placeholder='Enter Price'
                  name='Price'
                  value={inputFields.Price}
                  onChange={(event) => HandleChange(index, event)}
                />{' '}
                <br /> <br />
                <input
                  accept='image/png, image/gif, image/jpeg'
                  type='file'
                  placeholder='Upload Picture'
                  name='Picture'
                  onChange={onChangeFile}
                />{' '}
                <br /> <br />
                <img
                  src={FileName1}
                  height='200px'
                  width='400px'
                  alt='Picture not added Yet'
                />
              </div>
            ))}
            <Button
              onClick={PostData}
              style={{
                backgroundColor: 'green',
                borderColor: 'green',
                color: 'white',
                marginBottom: '3vmax',
                marginTop: '4vmax',
              }}
              variant='contained'
              type='submit'
            >
              Save Menu
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateMenus;
