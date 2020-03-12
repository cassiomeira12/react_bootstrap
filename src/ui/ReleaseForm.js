import React from 'react';

const ReleaseForm = ({ submitHandler }) => {
  let releaseName, releaseDate;

  const handlerSumbit = (event) => {
    submitHandler(event,
      {
        name: releaseName.value,
        date: releaseDate.value
      }
    );
    clearForm();
  }

  const clearForm = () => {
    releaseName.value = '';
    releaseDate.value = '';
  }

  return (
    <form onSubmit={handlerSumbit} className="form-inline" >
      <div className="form-row align-items-center">

        <div className="col-auto">
          <label className="sr-only" for="inlineFormInput">Release Name</label>
          <input type="text" ref={input => releaseName = input} className="form-control mb-2" id="inlineFormInput" placeholder="Nome" />
        </div>

        <div className="col-auto">
          <label className="sr-only" for="inlineFormInput">Release Date</label>
          <input type="text" ref={input => releaseDate = input} className="form-control mb-2" id="inlineFormInputGroup" placeholder="Date" />
        </div>

        <button type="submit" className="btn btn-primary mb-2">Salvar</button>

      </div>
    </form>
  )
}

export default ReleaseForm;