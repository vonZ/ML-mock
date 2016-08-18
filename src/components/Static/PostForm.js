import React from 'react';
import TextInput from 'Components/common/TextInput';
import TextAreaInput from 'Components/common/TextAreaInput';

const PostForm = ({post, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <TextInput
        name="heading"
        label="Rubrik"
        value={post.heading}
        onChange={onChange}
        errors={errors.heading}/>

      <TextAreaInput
        name="postContent"
        label="Beskrivande text"
        onChange={onChange}
        value={post.postContent}
        error={errors.text} />

      <TextInput
        name="date"
        label="Datum"
        value={post.date}
        onChange={onChange}
        error={errors.date}/>

      <TextInput
        name="location"
        label="Plats"
        value={post.location}
        onChange={onChange}
        error={errors.location}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>

    </form>
  );
};

PostForm.propTypes = {
  post: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PostForm;
