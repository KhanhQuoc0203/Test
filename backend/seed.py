import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from users.models import User
from tours.models import Tour

def seed_data():
    print("--- Seeding Sample Data ---")
    
    # 1. Create Creator
    creator, created = User.objects.get_or_create(
        username='creator1',
        defaults={
            'email': 'creator1@example.com',
            'phone': '0912345678',
            'role': 'CREATOR'
        }
    )
    if created:
        creator.set_password('password123')
        creator.save()
        print("- Created user Creator: creator1")
    else:
        print("- User Creator already exists")

    # 2. Create Customer
    customer, created = User.objects.get_or_create(
        username='customer1',
        defaults={
            'email': 'customer1@example.com',
            'phone': '0987654321',
            'role': 'CUSTOMER'
        }
    )
    if created:
        customer.set_password('password123')
        customer.save()
        print("- Created user Customer: customer1")

    # 3. Create Tours
    tour1, created = Tour.objects.get_or_create(
        title='Tour Du Lich Ha Long 2 Ngay 1 Dem',
        defaults={
            'creator': creator,
            'description': 'Chao mung ban den voi ky nghi tuyet voi tai Vinh Ha Long. Kham pha ve dep ky vi cua thien nhien.',
            'price': 2500000,
            'slots': 20
        }
    )
    if created:
        print("- Created Tour: Ha Long")

    tour2, created = Tour.objects.get_or_create(
        title='Kham Pha Da Lat Mong Mo',
        defaults={
            'creator': creator,
            'description': 'Da Lat voi khong khi trong lanh va nhung thung lung hoa ruc ro dang cho don ban.',
            'price': 1800000,
            'slots': 15
        }
    )
    if created:
        print("- Created Tour: Da Lat")

    print("--- Seeding Completed ---")

if __name__ == "__main__":
    seed_data()
