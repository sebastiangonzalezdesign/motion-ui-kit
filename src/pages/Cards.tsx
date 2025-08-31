import Card from '../components/Card/Card';

const Cards = () => {
  return (
    <div className="page">
      <h1>Card Components</h1>
      <p>Cards with fade-in animations for displaying content.</p>
      <Card>
        <h3>Sample Card 1</h3>
        <p>This is a sample card with fade-in animation.</p>
        <pre><code>{`<Card>
  <h3>Sample Card 1</h3>
  <p>This is a sample card with fade-in animation.</p>
</Card>`}</code></pre>
      </Card>
      <Card>
        <h3>Sample Card 2</h3>
        <p>Another example of a card component.</p>
        <pre><code>{`<Card>
  <h3>Sample Card 2</h3>
  <p>Another example of a card component.</p>
</Card>`}</code></pre>
      </Card>
    </div>
  );
};

export default Cards;
