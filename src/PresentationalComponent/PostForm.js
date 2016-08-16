import React from 'react';
import TextInput from '../components/common/TextInput';
import SelectInput from '../components/common/SelectInput';

const PostForm = ({post, allPosts, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <TextInput
        name="author"
        label="Author"
        value={post.Author}
        onChange={onChange}
        errors={errors.title}/>

      <TextInput
        name="text"
        label="Text"
        value={post.Text}
        onChange={onChange}
        errors={errors.Text}/>

      <TextInput
        name="date"
        label="Date"
        value={post.Date}
        onChange={onChange}
        error={errors.Date}/>

      <TextInput
        name="location"
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
  allPosts: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PostForm;
