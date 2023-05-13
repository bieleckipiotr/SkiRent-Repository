from unittest import skip
from django.test import TestCase, Client
from django.contrib.auth.models import User
from store.models import Category, Product




class TestViewResponses(TestCase):
    def setUp(self):
        self.c = Client()

    def test_url_hosts(self):
        """
        Test allowed hosts
        """
        response = self.c.get('/')
        self.assertEqual(response.status_code, 200) #200 = OK