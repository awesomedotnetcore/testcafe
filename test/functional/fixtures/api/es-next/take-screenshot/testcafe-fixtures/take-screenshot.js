import { ClientFunction } from 'testcafe';
import { parse } from 'useragent';


// NOTE: to preserve callsites, add new tests AFTER the existing ones
fixture `Take a screenshot`
    .page `http://localhost:3000/api/es-next/take-screenshot/pages/index.html`;


const getUserAgent = ClientFunction(() => navigator.userAgent.toString());


test('Take a screenshot', async t => {
    await t.takeScreenshot();
});

test('Take a screenshot with a custom path', async t => {
    const ua       = await getUserAgent();
    const parsedUA = parse(ua);

    await t.takeScreenshot('custom/' + parsedUA.family);
});

test('Incorrect action path argument', async t => {
    await t.takeScreenshot(1);
});
