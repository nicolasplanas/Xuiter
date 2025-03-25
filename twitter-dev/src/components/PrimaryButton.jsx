import { Send } from '@mui/icons-material';
import { Button } from '@mui/joy';
import PropTypes from 'prop-types';

export default function PrimaryButton ({ label, variant, size, disable }) {
    return (
        <Button
            type='submit'
            variant={ variant ?? 'solid'}
            size={ size ?? 'md'}
            disabled={disable}
            startDecorator={<Send />}
        >
            { label }
        </Button>
    )
}

PrimaryButton.proptypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['outlined','solid']),
    size: PropTypes.oneOf(['sm','md', 'lg']),
    disabled: PropTypes.bool,
}