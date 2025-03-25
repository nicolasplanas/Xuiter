import NewPostForm from '../components/NewPostForm';
import { PostContext } from '../contexts/PostContext';

export default {
    Component: NewPostForm,
    decorators: [
        () => (
            <PostContext.Provider value={{ createPost: () => {} }}>
                <Story />
            </PostContext.Provider>
        ),
    ],
};

export const Default = {};