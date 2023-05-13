from django.shortcuts import render, get_object_or_404
from .models import Category, Product


def all_products(request):
    products = Product.objects.all()
    return render(request, 'store/home.html', {'products': products})


def categories(request):
    categories = Category.objects.all()
    return {'categories': categories}


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'store/details.html', {'product' : product})


def category_list(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.objects.filter(category=category)
    return render(request, 'store/category.html', {'category' : category, 'products' : products})