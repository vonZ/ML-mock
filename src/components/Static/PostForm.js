import React from 'react';
import TextInput from 'Components/common/TextInput';
import TextAreaInput from 'Components/common/TextAreaInput';

const PostForm = ({post, onSave, onChange, onCloseReveal, saving, errors}) => {
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

      <input
        type="submit"
        disabled={saving}
        value="Close"
        onClick={onCloseReveal}
        className="btn btn-primary js-close-reveal-modal"/>
    </form>
  );
};

PostForm.propTypes = {
  post: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onCloseReveal: React.PropTypes.func,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PostForm;
