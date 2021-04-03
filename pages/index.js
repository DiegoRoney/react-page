import { getFontDefinitionFromNetwork} from 'next/dist/next-server/server/font-utils';
import { useState} from 'react';

function home() {
    return <div>
        <h1> HOME </h1>

        <p> teste de react </p>
        <a href="https://diegoroney.github.io/Diego/index.html"> @Diego </a>

    </div>
}

export default home