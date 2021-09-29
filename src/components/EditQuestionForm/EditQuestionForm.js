import { useForm } from 'react-hook-form';

const EditQuestionForm = ({ onSubmit, isLoading, question }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      question: question.question,
      answer: question.answer
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='form-group'>
          <label htmlFor='question'>Question Text</label>
          <input
            type='text'
            className='form-control'
            id='question'
            ref={register({ required: true })}
            name='question' />
          {errors.question && 'Question is required'}
        </div>

        <div className='form-group'>
          <label htmlFor='answer'>Answer Text</label>
          <input
            type='text'
            className='form-control'
            id='answer'
            ref={register({ required: true })}
            name='answer' />
          {errors.answer && 'Answer is required'}
        </div>

        <div className='form-group'>
          <button
            className='btn btn-primary btn-block'
            disabled={isLoading}
            type='submit'>
            {isLoading && (
              <span className='spinner-border spinner-border-sm'></span>
            )}
            <span>Submit Question</span>
          </button>
        </div>

      </form>
    </>
  );
};

export default EditQuestionForm;
