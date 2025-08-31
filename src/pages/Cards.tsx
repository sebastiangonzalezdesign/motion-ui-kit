import { useState } from 'react';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import CodePreview from '../components/CodePreview/CodePreview';
import Hero from '../components/Hero/Hero';
import { HeartIcon, ShareIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Cards = () => {
  const [likedCards, setLikedCards] = useState<number[]>([]);

  const toggleLike = (cardId: number) => {
    setLikedCards((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  return (
    <div className="page">
      <Hero
        headline="Card Components"
        description="Versatile cards with images, ratings, badges, and smooth animations."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Card with Image Placeholder"
        preview={
          <Card
            showImagePlaceholder
            title="Card with Image Placeholder"
            subtitle="This card uses a Heroicon placeholder"
            badge="New"
            rating={4}
          >
            <p>
              This is a sample card with an image placeholder, title, subtitle, badge, and star
              rating.
            </p>
            <Button size="sm" variant="ghost">
              Action
            </Button>
          </Card>
        }
        code={`// ProductCardExample.jsx
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';

export default function ProductCardExample() {
  return (
    <Card
      showImagePlaceholder
      title="Premium Component Pack"
      subtitle="$29.99 • Professional UI Kit"
      badge="Best Seller"
      badgeColor="warning"
      rating={5}
      actions={<Button size="sm">Add to Cart</Button>}
    >
      <p>
        Get access to 50+ premium components including advanced animations, dark mode support,
        and responsive design patterns.
      </p>
    </Card>
  );
}

// Notes:
// - Card accepts rating prop and actions slot for CTA buttons.
`}
      />

      <CodePreview
        title="Card with Actions"
        preview={
          <Card
            showImagePlaceholder
            title="Interactive Card"
            subtitle="Card with action buttons"
            badge="Featured"
            badgeColor="success"
            actions={
              <>
                <Button
                  size="sm"
                  variant="outline"
                  icon={<HeartIcon className="icon-small" />}
                  onClick={() => toggleLike(1)}
                >
                  {likedCards.includes(1) ? 'Liked' : 'Like'}
                </Button>
                <Button size="sm" variant="outline" icon={<ShareIcon className="icon-small" />}>
                  Share
                </Button>
              </>
            }
          >
            <p>This card includes interactive action buttons for liking and sharing content.</p>
          </Card>
        }
        code={`// InteractiveCardExample.jsx
import { useState } from 'react';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function InteractiveCardExample() {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      showImagePlaceholder
      title="Interactive Card"
      subtitle="Card with action buttons"
      badge="Featured"
      badgeColor="success"
      actions={
        <>
          <Button size="sm" variant="outline" icon={<HeartIcon className="icon-small" />} onClick={() => setLiked(!liked)}>
            {liked ? 'Liked' : 'Like'}
          </Button>
          <Button size="sm" variant="outline" icon={<ShareIcon className="icon-small" />}>
            Share
          </Button>
        </>
      }
    >
      <p>This card includes interactive action buttons for liking and sharing content.</p>
    </Card>
  );
}

// Notes:
// - Card accepts actions prop for custom action buttons.
`}
      />

      <CodePreview
        title="Product Card Example"
        preview={
          <Card
            showImagePlaceholder
            title="Premium Component Pack"
            subtitle="$29.99 • Professional UI Kit"
            badge="Best Seller"
            badgeColor="warning"
            rating={5}
            actions={<Button size="sm">Add to Cart</Button>}
          >
            <p>
              Get access to 50+ premium components including advanced animations, dark mode support,
              and responsive design patterns.
            </p>
          </Card>
        }
        code={`import Card from '../components/Card/Card';
import Button from '../components/Button/Button';

<Card
  showImagePlaceholder
  title="Premium Component Pack"
  subtitle="$29.99 • Professional UI Kit"
  badge="Best Seller"
  badgeColor="warning"
  rating={5}
  actions={
    <Button size="sm">
      Add to Cart
    </Button>
  }
>
  <p>Get access to 50+ premium components including advanced animations, dark mode support, and responsive design patterns.</p>
</Card>`}
      />

      <CodePreview
        title="Simple Content Card"
        preview={
          <Card
            title="Simple Card"
            subtitle="No image, just content"
            badge="Basic"
            badgeColor="secondary"
          >
            <p>
              This is a simple card without an image, perfect for displaying text content,
              notifications, or simple information blocks.
            </p>
            <p>
              Cards automatically handle spacing and provide consistent styling across your
              application.
            </p>
          </Card>
        }
        code={`import Card from '../components/Card/Card';

<Card
  title="Simple Card"
  subtitle="No image, just content"
  badge="Basic"
  badgeColor="secondary"
>
  <p>This is a simple card without an image, perfect for displaying text content, notifications, or simple information blocks.</p>
  <p>Cards automatically handle spacing and provide consistent styling across your application.</p>
</Card>`}
      />

      <CodePreview
        title="Card Grid Layout"
        preview={
          <div className="grid grid-2">
            <Card
              showImagePlaceholder
              title="Grid Card 1"
              subtitle="Part of a grid layout"
              badge="Grid"
              rating={3}
            >
              <p>
                This card is part of a responsive grid layout that automatically adjusts based on
                screen size.
              </p>
            </Card>

            <Card
              showImagePlaceholder
              title="Grid Card 2"
              subtitle="Another grid item"
              badge="Grid"
              badgeColor="primary"
              rating={4}
            >
              <p>
                Cards in grids maintain consistent heights and spacing for a clean, organized
                appearance.
              </p>
            </Card>

            <Card
              showImagePlaceholder
              title="Grid Card 3"
              subtitle="Third grid item"
              badge="Grid"
              badgeColor="success"
              rating={5}
            >
              <p>
                Grid layouts work perfectly with cards of varying content lengths and maintain
                visual consistency.
              </p>
            </Card>
          </div>
        }
        code={`import Card from '../components/Card/Card';

<div className="grid grid-2">
  <Card
    showImagePlaceholder
    title="Grid Card 1"
    subtitle="Part of a grid layout"
    badge="Grid"
    rating={3}
  >
    <p>This card is part of a responsive grid layout that automatically adjusts based on screen size.</p>
  </Card>

  <Card
    showImagePlaceholder
    title="Grid Card 2"
    subtitle="Another grid item"
    badge="Grid"
    badgeColor="primary"
    rating={4}
  >
    <p>Cards in grids maintain consistent heights and spacing for a clean, organized appearance.</p>
  </Card>

  <Card
    showImagePlaceholder
    title="Grid Card 3"
    subtitle="Third grid item"
    badge="Grid"
    badgeColor="success"
    rating={5}
  >
    <p>Grid layouts work perfectly with cards of varying content lengths and maintain visual consistency.</p>
  </Card>
</div>`}
      />

      <Card className="card--highlight">
        <h3>
          <SparklesIcon className="inline-icon" />
          Pro Tip
        </h3>
        <p>
          Cards support hover animations, dark mode theming, and can be easily customized with your
          brand colors. The new Card component provides a complete structure for displaying content
          with images, ratings, badges, and actions.
        </p>
      </Card>
    </div>
  );
};

export default Cards;
