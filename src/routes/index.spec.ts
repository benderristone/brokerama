import {render} from '@testing-library/svelte';
import component from './index.svelte';
import '@testing-library/jest-dom'

describe('demo test', () => {

    it('it works', async () => {
        const {getByText} = render(component);
        expect(getByText('Welcome to SvelteKit')).toBeInTheDocument();
    });

});
