< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Green Earth | Plant a Tree</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="font-sans text-gray-800">

            <!-- Navbar -->
            <nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
                <h1 class="text-xl font-bold text-green-800">Green Earth</h1>
                <ul class="hidden md:flex space-x-6">
                    <li><a href="#" class="hover:text-green-600">About</a></li>
                    <li><a href="#" class="hover:text-green-600">Gallery</a></li>
                    <li><a href="#" class="hover:text-green-600">Plant a Tree</a></li>
                </ul>
                <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">
                    Plant a Tree
                </button>
            </nav>

            <!-- Hero Section -->
            <section class="text-center bg-green-50 py-12 px-4">
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Plant a Tree, Grow a Future
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Join us and make a difference! Contribute to a greener planet for future generations.
                    </p>
                    <button class="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg">
                        Get Involved
                    </button>
                </div>
            </section>

            <!-- Main Content -->
            <section class="grid md:grid-cols-4 gap-6 px-6 py-12 max-w-7xl mx-auto">
                <!-- Categories -->
                <aside class="md:col-span-1">
                    <h3 class="font-semibold mb-4">Categories</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li><a href="#" class="hover:text-green-700">Fruit Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Timber Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Medicinal Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Shade Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Flowering Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Ornamental Trees</a></li>
                        <li><a href="#" class="hover:text-green-700">Aquatic Plants</a></li>
                    </ul>
                </aside>

                <!-- Trees Cards -->
                <div class="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div class="bg-white shadow rounded-xl p-4 text-center">
                        <div class="h-32 bg-gray-200 rounded-lg mb-4"></div>
                        <h4 class="font-semibold mb-2">Mango Tree</h4>
                        <p class="text-sm text-gray-600 mb-4">Provides shade and sweet fruits.</p>
                        <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>

                    <div class="bg-white shadow rounded-xl p-4 text-center">
                        <div class="h-32 bg-gray-200 rounded-lg mb-4"></div>
                        <h4 class="font-semibold mb-2">Neem Tree</h4>
                        <p class="text-sm text-gray-600 mb-4">Medicinal properties & natural air purifier.</p>
                        <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>

                    <div class="bg-white shadow rounded-xl p-4 text-center">
                        <div class="h-32 bg-gray-200 rounded-lg mb-4"></div>
                        <h4 class="font-semibold mb-2">Banyan Tree</h4>
                        <p class="text-sm text-gray-600 mb-4">Sacred tree providing large shade.</p>
                        <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>

                    <div class="bg-white shadow rounded-xl p-4 text-center">
                        <div class="h-32 bg-gray-200 rounded-lg mb-4"></div>
                        <h4 class="font-semibold mb-2">Guava Tree</h4>
                        <p class="text-sm text-gray-600 mb-4">Healthy fruits rich in Vitamin C.</p>
                        <button class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
                    </div>
                </div>

                <!-- Cart -->
                <aside class="md:col-span-1 bg-white shadow rounded-xl p-4">
                    <h3 class="font-semibold mb-4">Your Cart</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>Mango Tree x1</li>
                        <li>Neem Tree x2</li>
                    </ul>
                    <div class="border-t mt-4 pt-4">
                        <p class="flex justify-between"><span>Total:</span><span>$1000</span></p>
                    </div>
                </aside>
            </section>

            <!-- About Campaign -->
            <section class="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
                <img src="https://via.placeholder.com/400x300" alt="Plant" class="rounded-lg shadow" />
                <div>
                    <h3 class="text-2xl font-bold mb-4">About the Campaign</h3>
                    <p class="text-gray-600 mb-2">
                        Green Earth is a global tree plantation initiative dedicated to fighting climate change
                        by increasing forest cover worldwide.
                    </p>
                    <ul class="list-disc pl-6 text-gray-600 space-y-1">
                        <li>Restoration of natural ecosystems</li>
                        <li>Mitigation of climate change</li>
                        <li>Support for biodiversity</li>
                    </ul>
                </div>
            </section>

            <!-- Impact Section -->
            <section class="bg-green-50 py-12 px-6 text-center">
                <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div>
                        <h4 class="text-3xl font-bold text-green-700">500K+</h4>
                        <p class="text-gray-600">Trees Planted</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-bold text-green-700">120+</h4>
                        <p class="text-gray-600">Communities Involved</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-bold text-green-700">30+</h4>
                        <p class="text-gray-600">Countries Reached</p>
                    </div>
                </div>
            </section>

            <!-- Donation Form -->
            <section class="bg-green-800 text-white py-12 px-6 text-center">
                <h3 class="text-2xl font-bold mb-6">Plant a Tree Today</h3>
                <form class="max-w-md mx-auto space-y-4">
                    <input type="text" placeholder="Your Name" class="w-full px-4 py-2 rounded-lg text-gray-800" />
                    <input type="email" placeholder="Your Email" class="w-full px-4 py-2 rounded-lg text-gray-800" />
                    <select class="w-full px-4 py-2 rounded-lg text-gray-800">
                        <option>Number of Trees</option>
                        <option>1</option>
                        <option>5</option>
                        <option>10</option>
                    </select>
                    <button class="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-4 py-2 rounded-lg">
                        Donate Now
                    </button>
                </form>
            </section>

            <!-- Footer -->
            <footer class="bg-gray-900 text-gray-400 text-center py-6 text-sm">
                © 2025 Green Earth. All Rights Reserved.
            </footer>
        </body>
    </html>
