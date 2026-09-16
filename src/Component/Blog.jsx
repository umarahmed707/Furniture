import React, { useState, useMemo } from 'react';
import { 
  User, 
  Calendar, 
  Tag, 
  Search, 
 
  ArrowRight,

  Share2,
  ThumbsUp,
  MessageCircle,
  X,

} from 'lucide-react';
import logo from '../assets/Project logo.png'

const BLOG_POSTS = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    slug: "going-all-in-with-millennial-design",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "14 Oct 2022",
    rawDate: "2022-10-14",
    category: "Wood",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.</p>
      <h3 class="text-xl font-semibold my-4 text-gray-800">The Power of Minimalist Spaces</h3>
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.</p>
      <p class="mb-4">Volutpat odio facilisis mauris sit amet massa vitae tortor. Elementum eu facilisis sed odio morbi quis commodo odio. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.</p>
    `
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    slug: "exploring-new-ways-of-decorating",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "14 Oct 2022",
    rawDate: "2022-10-14",
    category: "Handmade",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.</p>
      <h3 class="text-xl font-semibold my-4 text-gray-800">Handcrafted Aesthetic Integration</h3>
      <p class="mb-4">Feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
    `
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    slug: "handmade-pieces-that-took-time-to-make",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "14 Oct 2022",
    rawDate: "2022-10-14",
    category: "Wood",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincident.</p>
      <h3 class="text-xl font-semibold my-4 text-gray-800">Timeless Craftsmanship</h3>
      <p class="mb-4">Et leo duis ut diam quam nulla porttitor massa. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
    `
  },
  {
    id: 4,
    title: "Modern home in Milan",
    slug: "modern-home-in-milan",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "03 Aug 2022",
    rawDate: "2022-08-03",
    category: "Interior",
    excerpt: "Contemporary interior architecture blending traditional textures with sleek, functional lines in the heart of Italy's design capital.",
    content: `
      <p class="mb-4">Discover how Italian architecture merges historical charm with ultra-sleek, sustainable living spaces. Milan continues to pioneer progressive interior design principles globally.</p>
    `
  },
  {
    id: 5,
    title: "Colorful office redesign",
    slug: "colorful-office-redesign",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "03 Aug 2022",
    rawDate: "2022-08-03",
    category: "Design",
    excerpt: "Revitalizing corporate atmosphere with vibrant palettes, ergonomic wood furnishings, and collaborative open spaces.",
    content: `
      <p class="mb-4">Injecting vibrant color into modern office environments enhances mood, productivity, and workplace satisfaction. Here are the top design concepts dominating this year.</p>
    `
  },
  {
    id: 6,
    title: "Crafting custom wooden tables",
    slug: "crafting-custom-wooden-tables",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    author: "Admin",
    date: "28 Jul 2022",
    rawDate: "2022-07-28",
    category: "Crafts",
    excerpt: "A deep dive into selecting natural timber, joinery techniques, and protective oil finishes for handcrafted luxury dining tables.",
    content: `
      <p class="mb-4">Every piece of solid wood carries a history. Learn how master woodworkers preserve natural grain patterns to create bespoke dining experiences.</p>
    `
  }
];

const CATEGORIES = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
];

const RECENT_POSTS = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80"
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePost, setActivePost] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const postsPerPage = 3;

  // Filter posts by search and category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory 
        ? post.category.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (postId) => {
    const post = BLOG_POSTS.find(p => p.id === postId);
    if (post) {
      setActivePost(post);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catName) => {
    if (selectedCategory === catName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(catName);
    }
    setCurrentPage(1);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans flex flex-col antialiased selection:bg-[#b88e2f] selection:text-white">
               <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="" className=""/>
          <h1 className="text-[48px] font-semibold text-black">
            Blog
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Blog</span>
          </div>
        </div>
      </section>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        {/* Active Filter Badges */}
        {(selectedCategory || searchTerm) && (
          <div className="mb-8 p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-amber-900">Active Filters:</span>
              {selectedCategory && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#b88e2f] text-white">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} className="hover:opacity-75">
                    <X size={14} />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#b88e2f] text-white">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="hover:opacity-75">
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
            <button 
              onClick={() => { setSelectedCategory(null); setSearchTerm(""); }}
              className="text-xs font-medium text-[#b88e2f] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {}
          <div className="lg:col-span-8">
            {activePost ? (
              /* Single Post Detail View */
              <div className="animate-fadeIn">
                <button 
                  onClick={() => setActivePost(null)}
                  className="inline-flex items-center gap-2 text-sm text-[#b88e2f] font-medium mb-6 hover:underline group"
                >
                  <ArrowRight className="rotate-180 transform group-hover:-translate-x-1 transition-transform" size={16} />
                  Back to all posts
                </button>

                <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img 
                    src={activePost.image} 
                    alt={activePost.title} 
                    className="w-full h-[350px] sm:h-[480px] object-cover"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-[#b88e2f]" /> {activePost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#b88e2f]" /> {activePost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Tag size={16} className="text-[#b88e2f]" /> {activePost.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {activePost.title}
                </h1>

                <div 
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />

                <div className="border-t border-b border-gray-100 py-4 my-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#b88e2f]">
                      <ThumbsUp size={18} /> <span>124 Likes</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#b88e2f]">
                      <MessageCircle size={18} /> <span>18 Comments</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-[#b88e2f]">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            ) : (
              /* Post List View matching image specifications */
              <div className="space-y-12 sm:space-y-16">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post) => (
                    <article key={post.id} className="group flex flex-col">
                      {/* Post Feature Image */}
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-5">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-[260px] sm:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Post Metadata Icons */}
                      <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs sm:text-sm mb-3">
                        <span className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span>{post.author}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Tag size={16} className="text-gray-400" />
                          <span>{post.category}</span>
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 
                        onClick={() => handleSelectPost(post.id)}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 hover:text-[#b88e2f] transition-colors mb-3 cursor-pointer leading-snug"
                      >
                        {post.title}
                      </h2>

                      {/* Post Excerpt */}
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="pt-1">
                        <button 
                          onClick={() => handleSelectPost(post.id)}
                          className="inline-block text-gray-900 hover:text-[#b88e2f] font-medium text-sm sm:text-base pb-1 border-b-2 border-gray-900 hover:border-[#b88e2f] transition-all"
                        >
                          Read more
                        </button>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-2xl">
                    <p className="text-gray-500 text-lg mb-4">No posts found matching your criteria.</p>
                    <button 
                      onClick={() => { setSelectedCategory(null); setSearchTerm(""); }}
                      className="px-6 py-2.5 bg-[#b88e2f] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#9c7726] transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                {}
                {filteredPosts.length > postsPerPage && (
                  <div className="flex items-center justify-end sm:justify-center gap-3 pt-6">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNum = index + 1;
                      const isActive = pageNum === currentPage;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-12 h-12 rounded-lg font-medium text-sm transition-all flex items-center justify-center ${
                            isActive
                              ? 'bg-[#b88e2f] text-white shadow-md'
                              : 'bg-[#f9f1e7] text-gray-800 hover:bg-[#ebdcc8]'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    {currentPage < totalPages && (
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-6 h-12 rounded-lg font-medium text-sm bg-[#f9f1e7] text-gray-800 hover:bg-[#ebdcc8] transition-all flex items-center justify-center"
                      >
                        Next
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {}
          <div className={`lg:col-span-4 ${mobileSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <aside className="space-y-10 sticky top-28">
              
              {/* Search Box Component */}
              <div className="relative">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder=""
                    className="w-full h-12 pl-4 pr-11 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] transition-all"
                  />
                  <Search className="absolute right-3.5 text-gray-900 pointer-events-none" size={18} />
                </div>
              </div>

              {/* Categories Widget */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Categories</h3>
                <ul className="space-y-4">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory?.toLowerCase() === cat.name.toLowerCase();
                    return (
                      <li key={cat.name}>
                        <button
                          onClick={() => handleCategorySelect(cat.name)}
                          className={`w-full flex items-center justify-between text-left transition-colors py-1 ${
                            isSelected 
                              ? 'text-[#b88e2f] font-semibold' 
                              : 'text-gray-400 hover:text-gray-900'
                          }`}
                        >
                          <span className={`${isSelected ? 'text-[#b88e2f]' : 'text-gray-400'}`}>
                            {cat.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {cat.count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Recent Posts</h3>
                <div className="space-y-5">
                  {RECENT_POSTS.map((recent) => (
                    <div 
                      key={recent.id}
                      onClick={() => handleSelectPost(recent.id)}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <img 
                        src={recent.image} 
                        alt={recent.title} 
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0 bg-gray-100 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#b88e2f] transition-colors line-clamp-2 leading-snug">
                          {recent.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          {recent.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>

        </div>
      </main>

    
    </div>
  );
}