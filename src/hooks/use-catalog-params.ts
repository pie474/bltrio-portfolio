'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { ProjectType, CreatorName, InstrumentationCategory } from '@/types/music';
import { SortOption } from '@/components/sort-popover';

export function useCatalogParams() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Read values from URL
    const urlQuery = searchParams.get('q') || '';
    const sortBy = (searchParams.get('sort') as SortOption) || 'newest';

    // Local state for instant text typing without cluttering URL immediately
    const [searchQuery, setSearchQuery] = useState(urlQuery);

    // Keep local search state in sync if URL changes externally
    useEffect(() => {
        setSearchQuery(urlQuery);
    }, [urlQuery]);

    const selectedTypes = useMemo(() => {
        const val = searchParams.get('type');
        return new Set<ProjectType>(val ? (val.split(',') as ProjectType[]) : []);
    }, [searchParams]);

    const selectedCreators = useMemo(() => {
        const val = searchParams.get('creator');
        return new Set<CreatorName>(val ? (val.split(',') as CreatorName[]) : []);
    }, [searchParams]);

    const selectedInstruments = useMemo(() => {
        const val = searchParams.get('instrument');
        return new Set<InstrumentationCategory>(val ? (val.split(',') as InstrumentationCategory[]) : []);
    }, [searchParams]);

    // Update URL quietly using native replaceState to avoid router overhead
    const updateUrlQuietly = useCallback((params: URLSearchParams) => {
        const queryString = params.toString();
        const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

        // Native replaceState updates the address bar cleanly
        window.history.replaceState(null, '', newUrl);
    }, [pathname]);

    // Debounce search URL update by 300ms
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== urlQuery) {
                const params = new URLSearchParams(window.location.search);
                if (searchQuery) params.set('q', searchQuery);
                else params.delete('q');

                updateUrlQuietly(params);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery, urlQuery, updateUrlQuietly]);

    // Checkbox & Sort handlers
    const setSortBy = useCallback((sort: SortOption) => {
        const params = new URLSearchParams(window.location.search);
        if (sort !== 'newest') params.set('sort', sort);
        else params.delete('sort');
        updateUrlQuietly(params);
        router.refresh(); // Tells Next.js to re-evaluate searchParams
    }, [updateUrlQuietly, router]);

    const toggleSetParam = useCallback(
        <T extends string>(key: string, currentSet: Set<T>, value: T) => {
            const params = new URLSearchParams(window.location.search);
            const updated = new Set(currentSet);
            updated.has(value) ? updated.delete(value) : updated.add(value);

            if (updated.size > 0) {
                params.set(key, Array.from(updated).join(','));
            } else {
                params.delete(key);
            }

            updateUrlQuietly(params);
            router.refresh();
        },
        [updateUrlQuietly, router]
    );

    const toggleType = (type: ProjectType) => toggleSetParam('type', selectedTypes, type);
    const toggleCreator = (creator: CreatorName) => toggleSetParam('creator', selectedCreators, creator);
    const toggleInstrument = (inst: InstrumentationCategory) => toggleSetParam('instrument', selectedInstruments, inst);

    const resetFilters = useCallback(() => {
        const params = new URLSearchParams(window.location.search);
        params.delete('type');
        params.delete('creator');
        params.delete('instrument');
        updateUrlQuietly(params);
        router.refresh();
    }, [updateUrlQuietly, router]);

    const resetAll = useCallback(() => {
        setSearchQuery('');
        window.history.replaceState(null, '', pathname);
        router.refresh();
    }, [pathname, router]);

    return {
        searchQuery,
        sortBy,
        selectedTypes,
        selectedCreators,
        selectedInstruments,
        setSearchQuery,
        setSortBy,
        toggleType,
        toggleCreator,
        toggleInstrument,
        resetFilters,
        resetAll,
    };
}