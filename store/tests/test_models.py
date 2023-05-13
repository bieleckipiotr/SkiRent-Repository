from django.test import TestCase
from store.models import Category, Brand

class TestCategoriesModel(TestCase):

    def setUp(self):
        self.data1 = Category.objects.create(name='django', slug='django')

    def test_category_model_entry(self):
        """
        Test category model data insertion/types/field attributes
        """
        data = self.data1
        self.assertTrue(isinstance(data, Category))


    def test_category_model_return(self):
        """
        Test category model return name
        """
        data = self.data1
        self.assertEqual(str(data), 'django')


class TestBrandsModel(TestCase):
    def setUp(self):
        self.data1 = Brand.objects.create(name="brand", slug="brand")


    def test_category_model_return(self):
        """
        Test category model return name
        """
        data = self.data1
        self.assertEqual(str(data), 'brand')