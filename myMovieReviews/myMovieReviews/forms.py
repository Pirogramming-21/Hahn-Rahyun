from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['title', 'director', 'actors', 'genre', 'rating', 'release_year', 'running_time', 'content']
        widgets = {
            'rating': forms.NumberInput(attrs={'step': '0.1', 'min': '0', 'max': '5'}),
            'release_year': forms.NumberInput(attrs={'min': '1800', 'max': '2100'}),
            'running_time': forms.NumberInput(attrs={'min': '1'}),
        }
        labels = {
            'running_time': 'Running time (분)',
        }
