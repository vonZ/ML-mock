import React from 'react';
import TextInput from '../components/common/TextInput';

const PostForm = ({post, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <TextInput
        name="Author"
        label="Author"
        value={post.Author}
        onChange={onChange}
        errors={errors.title}/>

      <TextInput
        name="Text"
        label="Text"
        value={post.Text}
        onChange={onChange}
        errors={errors.Text}/>

      <TextInput
        name="Date"
        label="Date"
        value={post.Date}
        onChange={onChange}
        error={errors.Date}/>

      <TextInput
        name="Location"
        label="Location"
        value={post.Location}
        onChange={onChange}
        error={errors.Location}/>

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
